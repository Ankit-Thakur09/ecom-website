import AdminFooter from "../../components/admincom/AdminFooter";

export default function AdminLayout({children}) {
 

  return (
    <div>

          
          <main>{children}</main>
          <AdminFooter/>
        
    </div>
  );
}
