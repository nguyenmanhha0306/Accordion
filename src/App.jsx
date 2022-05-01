import "./App.scss";
import "boxicons/css/boxicons.min.css";
import Accordion from "./components/accordion/Accordion";

const data = [
  {
    title: "Ludwig Wittgenstein",
    content:
      "The limits of my language mean the limits of my world.(Giới hạn về ngôn ngữ là giới hạn về nhận thức, về thế giới.)",
  },
  {
    title: "Charlemagne",
    content:
      "To have another language is to possess a second soul.Học thêm ngoại ngữ mới là sở hữu một tâm hồn thứ hai.",
  },
  {
    title: "Nelson Mandela",
    content:
      "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.(Nếu bạn nói bằng ngôn ngữ mà người nghe được học, anh ta sẽ ghi nhớ bằng não bộ. Nếu bạn nói bằng ngôn ngữ mẹ đẻ của anh ý, anh ý sẽ nhớ bằng cả trái tim.)",
  },
  {
    title: "Federico Fellini",
    content: `A different language is a different vision of life.(Một ngôn ngữ mới là 1 thế gới mới.)`,
  },
];

function App() {
  return (
    <div style={{ width: "600px", paddingTop: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "50px" }}>
        Ejoy Discovery
      </h1>
      {data.map((item, index) => (
        <div>
          <Accordion title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
}

export default App;
