import React from "react";
import resume from '../public/assets/resume.pdf'

export default function Resume() {
  return (
    <div>
      <a download href={resume}>
        Resume
      </a>
    </div>
  );
}
