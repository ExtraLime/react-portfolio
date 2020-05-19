import React from 'react'


const DataScience = () => {
    return (
        <>
        <div className='ds-info'>
            <div className='meths'><h4 className='meth-label'>Methodologies:</h4>
            <ul>
            <li>Advanced API Calls</li>
            <li>Advanced Web Scraping)</li>
            <li>Experimental Design</li>
            <li>Complex Data Visualization</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Data Cleaning and Preprocessing Pipelines</li>
            <li>Feature Engineering </li>
            <li>Algorithm Design</li>
            </ul></div>
            <div className='ml'><h4>Machine Learning:</h4>
            <ul>
            <li>Regression (linear/logistic/regularized)</li>
            <li>Classification</li>
            <li>Neural Networks</li>
            <li>Computer Vision</li>                
            <li>Random Forest</li>
            <li>Gradient Boosting</li>
            <li>Clustering</li>
            </ul></div>

            <div className='langframe'><h4>Languages and Frameworks:</h4>
            <ul>
            <li>Python, Jupyter</li>
            <li>Pandas, NumPy, SciPy</li>
            <li>Matplotlib, Seaborn, Plotly/Dash</li>
            <li>Scikit-learn (SKLearn), XGBoost</li>
            <li>PyTorch/Fastai, TensorFlow/Keras</li>
            <li>Docker, Collab, IBM Studio</li>
            <li>Spark, Hadoop, SQL</li></ul></div>
            </div>
        </>
    )
}

export default DataScience;