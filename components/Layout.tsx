import Header from "./Header";
import Footer from "./Footer";

interface LayoutComponent {
  children: React.ReactNode;
}

export default function Layout(props: LayoutComponent) {
  const { children } = props;
  return (
    <div className="dark bg-gray-900 w-full">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
