import React from 'react'

import python from './python.svg'
import r from './r.svg'
import plotly from './plotly.svg'
import pytorch from './pytorch.svg'


const DsIcons = () => {
    return (
        <>
        <img alt="python" src={python} height="20px"></img>
        <img alt="jupyter-icon" src='https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg' height='20px'></img>
        <img alt="spark-icon" src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' height='20px'></img>
        <img alt="plt-icon" src='https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg' height='20px'></img>
        <img alt="plotly-icon" src={plotly} height='20px'></img>
        <img alt="xgboost-icon" src='https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png' height='20px'></img>
        <img alt="r-icon" src={r} height='20px'></img>
        <img alt="watson-icon" src='https://cdn.freelogovectors.net/wp-content/uploads/2018/12/ibm-watson-logo.png' height='20px'></img>
        <img alt="tf-icon" src='https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' height="20px"></img>
        <img alt="sklearn-icon" src='https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' height="20px"></img>
        <img alt="numpy-icon" src='https://upload.wikimedia.org/wikipedia/commons/1/1a/NumPy_logo.svg' height='20px'></img>
        <img alt="pg-icon" src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' height="20px"></img>        
        <img alt="pytorch" src={pytorch} height='20px'></img>
        </>
    )
}

export default DsIcons