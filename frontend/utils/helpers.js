import { ethers } from "ethers"
import { ToastContainer, toast } from 'react-toastify';

export const toWei = ether => ethers.utils.parseEther(ether)
export const toEther = wei => ethers.utils.formatEther(wei)

export const notify = (msg, type) => {

  if(type == 'success') {
      toast.success(msg, {
          position: toast.POSITION.BOTTOM_RIGHT
      });
  }
  else if (type == 'error') {
      toast.error(msg, {
          position: toast.POSITION.BOTTOM_RIGHT
      });            
  } 
  else if (type == 'warn') {
      toast.warn(msg, {
        position: toast.POSITION.BOTTOM_RIGHT
      });            
  } 
  else if (type == 'info') {
      toast.info(msg, {
        position: toast.POSITION.BOTTOM_RIGHT
      });            
  } else {
      toast(msg);            
  }
  
};