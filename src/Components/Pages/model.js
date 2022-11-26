import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
    
import ModelViewer from 'react-model-viewer';

const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';

const App = () => (
  <ModelViewer type="gtlf" src={modelPath} />
);