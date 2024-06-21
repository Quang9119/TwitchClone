
import Container from "./(home)/_components/container";
import { Navbar } from "./(home)/_components/navbar";
import Sidebar from "./(home)/_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
