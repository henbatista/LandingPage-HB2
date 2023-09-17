import React from 'react'

interface ProjectProps {
  name: string
  role: string
  bio: string
  imageUrl: string
  websiteUrl: string
  socialMediaUrl: string
}

const Project: React.FC<ProjectProps> = ({
  name,
  role,
  bio,
  imageUrl,
  websiteUrl,
  socialMediaUrl
}) => {
  return (
    <div className="relative overflow-hidden rounded-md shadow-lg group">
      <img
        className="object-cover w-full h-72 xl:h-80"
        src={imageUrl}
        alt={name}
      />
      <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-600"></div>
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <p className="mb-1 text-lg font-bold text-white">{name}</p>
          <p className="mb-4 text-xs text-blue-50">{role}</p>
          <p className="mb-4 text-xs tracking-wide text-blue-50">{bio}</p>
          <div className="flex items-center justify-center space-x-3 bg-top bg-cover">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <div className="transition-colors duration-300 bg-top bg-cover cursor-pointer hover:text-white text-blue-50">
                <svg className="h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
            <a href={socialMediaUrl} target="_blank" rel="noopener noreferrer">
              <div className="transition-colors duration-300 cursor-pointer text-blue-50 hover:text-white">
                <svg className="h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
