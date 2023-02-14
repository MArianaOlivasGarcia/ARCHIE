
export const HomePage = () => {
  return (
    <>
      
      <div className="text-center">
        <h2>Cloud Self-service Portal</h2>
        <h3>Architecture & DevOps in a single solution</h3>
      </div>

      <div className="text-center mt-5">
        <p>Build infrastructures in minutes without Coding or Architecting skills<br />
          Predefined, Customisable, secured and well architected as a standard.<br />
          Deploying in the cloud has never been so easy !</p>
      </div>


      <div className='text-center'>
        <a 
          href='https://www.youtube.com/watch?v=J5XJ4t8GrW4' 
          target='_blank' className="btn btn-warning me-3">
          Try me
        </a>
        <a href='https://www.youtube.com/watch?v=J5XJ4t8GrW4' target='_blank' className="btn btn-primary">
          Watch our demo
          <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>
      </div>


      <div className="text-center mt-5">
        <p>Have a free <a href="/">static website</a> deployed in your preferred Cloud on us ! Nothing required from your side. <br />
        Signup & subscribe with your own account to provide your cloud credentials, access premium features and deploy in your cloud accounts.</p>
      </div>

      {/* <img src={processDiagram} height={700} alt="" /> */}

    </>
  )
}
