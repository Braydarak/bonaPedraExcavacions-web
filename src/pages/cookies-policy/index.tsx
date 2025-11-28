import DocxViewer from "../../components/docxViewer";
import Header from "../../components/header";
import Footer from "../../components/footer";

const CookiesPolicyPage = () => {
  return (
    <>
      <Header />
      <DocxViewer
        src={"/MDM_POLITICA%20DE%20COOKIES_(PLANTILLA).docx"}
        title={"Política de Cookies"}
        className="min-h-[60vh]"
      />
      <Footer />
    </>
  );
};

export default CookiesPolicyPage;
