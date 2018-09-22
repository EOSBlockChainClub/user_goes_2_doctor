const canDrive = medicalInformation => {
  return true;
};
const canFly = medicalInformation => {
  return false;
};
const canInsurance = medicalInformation => {
  return true;
};
const canGym = medicalInformation => {
  return true;
};
const canMarathon = medicalInformation => {
  return false;
};

export { canDrive, canFly, canInsurance, canGym, canMarathon };
