
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './template-card.css';

export interface Template {
    image: string
    title: string
    isAvailable: boolean 
}

interface Props {
    template: Template
}



export const TemplateCard: FC<Props> = ({ template }) => {
  return (
    <Link to="/" className="card bg-secondary border border-0 shadow-sm p-3">
        <img src={ template.image } alt={ template.image } />

        <div className='mt-4'>
            <h3>{ template.title }</h3>
            <p>Demo Website</p>

            <div className='text-end'>
                <div className="btn btn-outline-warning">
                    { template.isAvailable ? 'Deploy' : 'Coming Soon' }
                </div>
            </div>
        </div>
    </Link>
  )
}
