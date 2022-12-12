import 'intl';
import 'intl/locale-data/jsonp/en-IN';
import 'intl/locale-data/jsonp/en';

export const FormateAmmount = (amount: any) => {
  const formatter = new Intl.NumberFormat('en-IN');
 return formatter.format(amount);
};

export default FormateAmmount;
