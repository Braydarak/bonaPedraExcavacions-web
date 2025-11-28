import DocxViewer from "../../components/docxViewer";
import Header from "../../components/header";
import Footer from "../../components/footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <DocxViewer
        src={"/MDM_POLITICA%20DE%20PRIVACIDAD.docx"}
        title={"Política de Privacidad"}
        className="min-h-[60vh]"
      />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
