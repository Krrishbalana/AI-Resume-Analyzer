import React, { useState, type FormEvent } from 'react'
import FileUploader from '~/components/FileUploader';
import Navbar from '~/components/Navbar'

const upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null)


    const handleFileSelect = (file : File | null) => {
        setFile(file)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {}

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section className='main-section'>
            <div className='page-heading py-16'>
                <h1>Smart Feedback for Your Dream Job !</h1>
                {isProcessing ? (
                    <>
                        <h2>{statusText}</h2>
                        <img src="public/images/resume-scan.gif" className='w-full' alt="" />
                    </>
                ) : (
                    <h2>Upload your resume… because even robots need to roast it before HR does!</h2>
                )}
                {!isProcessing && (
                    <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                        <div className='form-div'>
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" name='company-name' placeholder='Enter Company Name' id='company-name' />
                        </div>
                        <div className='form-div'>
                            <label htmlFor="job-title">Job Title</label>
                            <input type="text" name='job-title' placeholder='Enter Job Title' id='job-title' />
                        </div>
                        <div className='form-div'>
                            <label htmlFor="job-description">Job Description</label>
                            <textarea rows={6} name='job-description' placeholder='Enter Job Description' id='job-description' />
                        </div>

                        <div className='form-div'>
                            <label htmlFor="uploader">Upload Resume</label>
                            <FileUploader onFileSelect={handleFileSelect} />
                        </div>

                        <button className='primary-button' type='submit'>
                            Analyze Resume
                        </button>
                    </form>
                )}
            </div>
        </section>
    </main>
  )
}

export default upload
