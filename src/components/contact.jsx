import React, { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const validateForm = () => {
    if (!formData.name.trim()) return "Nama harus diisi"
    if (!formData.email.trim()) return "Email harus diisi"
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Format email tidak valid"
    if (!formData.message.trim()) return "Pesan harus diisi"
    return ""
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    try {
      // Send email through backend API
      const response = await fetch("http://localhost:5000/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Terjadi kesalahan saat mengirim email")
      }

      // Open WhatsApp in new tab
      const waMessage = `https://wa.me/6285852345718?text=Halo, saya ingin menghubungi Anda. Saya tertarik dengan profil Anda dan ingin berdiskusi lebih lanjut. Nama saya ${formData.name}, email saya ${formData.email}, dan pesan saya adalah: ${formData.message}`
      window.open(waMessage, "_blank")

      setSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setError("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.")
      console.error("Error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Hubungi Kami</h2>

      {error && <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">⚠️ {error}</div>}

      {success && <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-md">✅ Pesan berhasil dikirim! Terima kasih telah menghubungi kami.</div>}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan email Anda"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1"
          >
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tulis pesan Anda"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? <>⏳ Mengirim...</> : <>📤 Kirim Pesan</>}
        </button>
      </form>
    </div>
  )
}
