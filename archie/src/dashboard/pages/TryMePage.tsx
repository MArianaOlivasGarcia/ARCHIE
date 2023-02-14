
import icoTry from '../../assets/icons/cloud-pink.png'
import { TemplateCard, TemplateCardTest } from '../components'
import { Template } from '../components/TemplateCard'

const templates: Template[]  = [
  {
    image: 'https://archie-aws-inventory.s3.eu-west-1.amazonaws.com/images/AwsDemo01.svg',
    title: 'Amazon Web Services',
    isAvailable: true,
  },
  {
    image: 'https://archie-aws-inventory.s3.eu-west-1.amazonaws.com/images/gcp_loadbalancer.svg',
    title: 'Google Cloud Platform',
    isAvailable: false,
  },
  {
    image: 'https://archie-aws-inventory.s3.eu-west-1.amazonaws.com/images/gcp_loadbalancer.svg',
    title: 'Microsoft Azure',
    isAvailable: false,
  }
]

export const TryMePage = () => {
  return (
    <>

      <div className="d-flex align-items-center">
        <img className="me-3" src={icoTry} alt="AWS" height={50} />
        <h2>Multi | Demo | Static Website</h2>
      </div>

        <div className="row mt-5">

            {
              templates.map( (template, index) => (
                <div className="col-md-4 mt-3 mt-md-0" key={index}>
                    <TemplateCard template={template} />
                </div>
              ))
            }

        </div>

    </>
  )
}
