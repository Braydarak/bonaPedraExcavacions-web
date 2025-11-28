import DocxViewer from "../../components/docxViewer";
import Header from "../../components/header";
import Footer from "../../components/footer";

const LegalNoticePage = () => {
  return (
    <>
      <Header />
      <DocxViewer
        src={"/MDM_AVISO%20LEGAL.docx"}
        title={"Aviso Legal"}
        className="min-h-[60vh]"
      />
      <Footer />
    </>
  );
};

export default LegalNoticePage;
