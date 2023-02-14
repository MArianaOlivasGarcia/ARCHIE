
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './template-card-test.css';

export interface Template {
    image: string
    title: string
    isAvailable: boolean 
}

interface Props {
    template: Template
}



export const TemplateCardTest: FC<Props> = ({ template }) => {
  return (
    <Link to="/" className="card border border-0">
        <div style={{ position: 'relative' }}>
            <span className='demoSpan badge text-bg-secondary'>Demo Website</span>
            <img src={ template.image } alt={ template.image } />
        </div>
        <div className='my-2 d-flex align-items-center justify-content-between'>
            <h3 className='m-0'>{ template.title }</h3>
            <span><small>{ template.isAvailable ? 'Deploy' : 'Coming Soon' }</small></span>
        </div>
    </Link>
  )
}
