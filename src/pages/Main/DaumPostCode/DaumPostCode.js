import DaumPostcode from 'react-daum-postcode';

const Postcode = ({ setModalVisible, setAddress, updateCheckedList }) => {
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setModalVisible(prev => ({ ...prev, postModal: false }));
    setAddress(fullAddress);
    updateCheckedList('post', data.bname);
  };

  return <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />;
};

export default Postcode;

const postCodeStyle = {
  width: '500px',
  height: '500px',
  padding: '25px',
};
