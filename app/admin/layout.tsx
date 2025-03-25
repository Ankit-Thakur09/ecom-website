import StoreProvider from "@/store/StoreProvider";
import AdminFooter from "../../components/admincom/AdminFooter";

export default function AdminLayout({children}) {
 

  return (
    <div>

          <StoreProvider><div>{children}</div></StoreProvider>
          
          <AdminFooter/>
        
    </div>
  );
}
