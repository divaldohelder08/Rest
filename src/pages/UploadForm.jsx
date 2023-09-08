import { useState } from "react"
import axios from "axios"

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected")
      return
    }

    const formData = new FormData()
    formData.append("image", selectedFile)

    try {
      const response = await axios.post(
        "http://localhost:3333/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      console.log("Upload successful", response.data)
    } catch (error) {
      console.error("Error during upload:", error)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default UploadForm
