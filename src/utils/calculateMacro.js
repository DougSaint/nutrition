function calculateMetabolismBasal(weight, height, age, gender) {
    if (gender === 'male') {
      return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else if (gender === 'female') {
      return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }
  }

export default function calculateCalories(weight, height, age, gender, activityLevel){
  const metabolismBasal = calculateMetabolismBasal(weight,height,age,gender);

  let exerciseCalories = 0;
  let protein = 0;
  switch (activityLevel) {
    case 'none':
      exerciseCalories = 0;
      protein = 0.8;
      break;
    case '1-3':
      exerciseCalories = 300;
      protein = 1
      break;
    case '3-5':
      exerciseCalories = 500;
      protein = 1.2
      break;
    case 'everyday':
      exerciseCalories = 750;
      protein = 1.5
      break;
    default:
      exerciseCalories = 0;
  }

  return {calories: metabolismBasal + exerciseCalories, protein : protein * weight};
}
