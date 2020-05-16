import React from 'react'
import { StyledBasics } from "./Tldr.styled"

const DataScience = () => {
    return (
        <>
        <div className='ds-info'>
            <div className='meths'><h4 className='meth-label'>Methodologies:</h4>
            <ul>
            <li>Data access (API calls, advanced web scraping)</li>
            <li>experimental design</li>
            <li>complex data visualization</li>
            <li>natural language processing (NLP)</li>
            <li>data cleaning/preprocessing</li>
            <li>feature engineering </li>
            <li>algorithm design</li>
            </ul></div>
            <div className='ml'><h4>Machine Learning:</h4>
            <ul>
            <li>Regression (linear/logistic/regularized)</li>
            <li>classification, neural networks, Computer Vision</li>
            <li>decision tree, ensemble learning/random forest</li>
            </ul></div>

            <div className='langframe'><h4>Languages and Frameworks:</h4>
            <ul>
            <li>Python, Jupyter, SQL, NumPy</li>
            <li>Pandas, Matplotlib/Seaborn, SciPy</li>
            <li>Scikit-learn (SKLearn), TensorFlow/Keras</li>
            <li>PyTorch/Fastai, Docker, Tableau</li>
            <li>Spark, Hadoop, xgboost</li></ul></div>
            </div>
        </>
    )
}

export default DataScience;