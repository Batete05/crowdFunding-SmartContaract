import React, { useState } from 'react';
import { getContract, getSigner } from '../utils/EthereumObject';
import { TextField, Button, Box, Typography } from '@mui/material';
import { ethers } from 'ethers';

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [image, setImage] = useState('');

  const createCampaign = async () => {
    const contract = getContract();
    const signer = getSigner();
    const address = await signer.getAddress();
    await contract.createCampaign(
      address, 
      title, 
      description, 
      ethers.utils.parseEther(target), 
      parseInt(deadline), 
      image
    );
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">Create Campaign</Typography>
      <TextField 
        fullWidth 
        margin="normal" 
        label="Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        variant="outlined"
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Description" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        variant="outlined" 
        multiline
        rows={4}
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Target (ETH)" 
        value={target} 
        onChange={e => setTarget(e.target.value)} 
        variant="outlined"
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Deadline (Timestamp)" 
        value={deadline} 
        onChange={e => setDeadline(e.target.value)} 
        variant="outlined"
      />
      <TextField 
        fullWidth 
        margin="normal" 
        label="Image URL" 
        value={image} 
        onChange={e => setImage(e.target.value)} 
        variant="outlined"
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={createCampaign} 
          sx={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default CreateCampaign;
