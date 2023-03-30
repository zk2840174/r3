import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";


const MemberLoginPage = () => {




  return (
    <BasicLayout>

      <div className="w-full px-6 flex  bg-slate-200 shadow-md">
        <div className="w-1/4 ">
        <div className="m-6  font-extrabold  text-2xl">Login Page</div>
        </div>
      </div>

      <LoginComponent></LoginComponent>


    </BasicLayout>
  );
}
 
export default MemberLoginPage;