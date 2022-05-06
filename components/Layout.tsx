import Header from "./Header";
import Footer from "./Footer";
import { LayoutComponent } from "../interfaces/LayoutComponent";

export default function Layout(props: LayoutComponent) {
  const { children } = props;
  return (
    <div className="flex flex-col dark bg-gray-900 w-full min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
