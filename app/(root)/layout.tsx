import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const loggedIn = {firstName: 'Hassim', lastName: 'Diallo'};  


  return (
    
     <main className="flex h-screen w-full">
      <Sidebar user={loggedIn  }/>
        {children }
     </main>
   
  );
}
