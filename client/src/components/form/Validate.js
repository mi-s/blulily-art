const PATTERN = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+).([a-zA-Z]{2,5})$";

const Validate = (name, value) => {
   let errors = {};
   switch (name) {
      case "name":
         errors.name = value.length === 0 ? "Username is required" : "";
         break;
      case "user_name":
         errors.user_name =
            value.length === 0
               ? "Username is required"
               : "";
         break;
      case "password":
         errors.password =
            value.length === 0
               ? "Password is required"
               : value.length < 6
               ? "Password must be atleast 6 characters"
               : "";
         break;
      case "title":
         errors.title = value.length === 0 ? "Title is required" : "";
         break;
      case "body":
         errors.body = value.length === 0 ? "Description is required" : "";
         break;
      default:
         break;
   }

   return {
      errors
   };
};

export default Validate;