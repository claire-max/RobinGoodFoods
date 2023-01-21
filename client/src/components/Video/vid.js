import React from 'react';

// import "./video.css";

export default function App() {
  return (
     
    <video className="w-100 vidyoyo " autoPlay loop muted>
      <source
        src="https://player.vimeo.com/external/518625507.sd.mp4?s=90ae8b78f3446dc2b56b568a3ff1991bbb06ce42&profile_id=164&oauth2_token_id=57447761"
        type="video/mp4"
        allowFullScreen
      />
    </video>
  );
}



    
