import CV from "../../assets/CV.pdf";


const CallToAction = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download My CV</a>
        <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
    </div>
  )
}


export default CallToAction;