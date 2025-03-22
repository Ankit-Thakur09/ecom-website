import AdminFooter from "@/components/global/footer/AdminFooter";

export default function AdminLayout({children}) {
 

  return (
    <div>

          
          <main>{children}</main>
          <AdminFooter/>
        
    </div>
  );
}
