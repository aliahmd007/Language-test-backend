
// import React, { useState } from "react";

// function App() {
//   const [language, setLanguage] = useState("");
//   const [mcqs, setMcqs] = useState("");
//   const [interview, setInterview] = useState("");
//   const [errorDetection, setErrorDetection] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

  

//   const handleSubmit = async () => {
//     let promptParts = [];
//     if (language.trim()) promptParts.push(`Language:\n${language.trim()}`);
//     if (mcqs.trim())
//       promptParts.push(
//         `MCQs\nGenerate ${mcqs} multiple choice question(s) with options A, B, C, D and provide the correct answers from this topics ${language}. (Format: Q: ..., A: ..., B: ..., C: ..., D: ..., Ans: ...)`
//       );
//     if (interview.trim())
//       promptParts.push(
//         `Interview Questions\nProvide ${interview} simple interview question(s) with short answers from this topics ${language}. (Format: Q: ..., Ans: ...)`
//       );
//     if (errorDetection.trim())
//       promptParts.push(
//         `Error Detection\nGive ${errorDetection} error detection question(s) with answers from this topics ${language}. (Format: Q: ..., Ans: ...)`
//       );

//     if (promptParts.length === 0) return;

//     const combinedPrompt = promptParts.join("\n\n");

//     setLoading(true);
//     setResponse("");

//     try {
//       const res = await fetch("http://localhost:4000/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt: combinedPrompt }),
//       });
//       const data = await res.json();
//       setResponse(data.text);
//     } catch (err) {
//       console.error(err);
//       setResponse("Failed to generate content");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /////////////////////////////////////////////

// // const handleSubmit = async () => {
// //     let promptParts = [];
// //     if (language.trim()) promptParts.push(`Language:\n${language.trim()}`);
// //     if (mcqs.trim())
// //       promptParts.push(
// //         `=== MCQs ===\nGenerate ${mcqs} multiple choice question(s) with options A, B, C, D and provide the correct answers from this topics ${language}.`
// //       );
// //     if (interview.trim())
// //       promptParts.push(
// //         `=== Interview Questions ===\nProvide ${interview} simple interview question(s) with short answers from this topics ${language}.`
// //       );
// //     if (errorDetection.trim())
// //       promptParts.push(
// //         `=== Error Detection ===\nGive ${errorDetection} error detection question(s) with answers from this topics ${language}.`
// //       );

// //     if (promptParts.length === 0) return;

// //     const combinedPrompt = promptParts.join("\n\n");

// //     setLoading(true);
// //     setResponse("");

// //     try {
// //       const res = await fetch("https://language-test-app-production.up.railway.app/api/generate", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ prompt: combinedPrompt }),
// //       });
// //       const data = await res.json();
// //       setResponse(data.text || "");
// //     } catch (err) {
// //       console.error(err);
// //       setResponse("Failed to generate content");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

//   // ✅ Function to render each section
//   const renderSection = (title, content, bgColor) => (
//     <div
//       style={{
//         backgroundColor: bgColor,
//         padding: "1.2rem",
//         borderRadius: "10px",
//         boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h2 style={{ marginBottom: "1rem", color: "#222" }}>{title}</h2>
//       {content.split("\n").map((line, i) => {
//         if (!line.trim()) return null;

//         // MCQ options
//         if (/^[A-D]:/i.test(line)) {
//           return (
//             <p key={i} style={{ margin: "0.2rem 0 0.2rem 1rem", color: "#444" }}>
//               {line}
//             </p>
//           );
//         }

//         // Answers
//         const isAnswer = line.toLowerCase().startsWith("ans");
//         return (
//           <p
//             key={i}
//             style={{
//               color: isAnswer ? "#666" : "#000",
//               fontWeight: isAnswer ? "normal" : "bold",
//               margin: "0.4rem 0",
//             }}
//           >
//             {line}
//           </p>
//         );
//       })}
//     </div>
//   );

//   return (
//     <div
//       style={{
//         maxWidth: "900px",
//         margin: "2rem auto",
//         fontFamily: "Arial, sans-serif",
//         padding: "1rem",
//       }}
//     >
//       <h1 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>
//         Gemini API Multi-Input Test
//       </h1>

//       {/* Input Fields */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         <div style={{ backgroundColor: "#e0f7fa", padding: "1rem", borderRadius: "8px" }}>
//           <h3>Enter Language</h3>
//           <textarea
//             rows={2}
//             placeholder="Type the language here..."
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "0.5rem",
//               fontSize: "1rem",
//               borderRadius: "5px",
//             }}
//           />
//         </div>

//         <div style={{ backgroundColor: "#fff3e0", padding: "1rem", borderRadius: "8px" }}>
//           <h3>MCQs</h3>
//           <textarea
//             rows={2}
//             placeholder="How many MCQs do you want?"
//             value={mcqs}
//             onChange={(e) => setMcqs(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "0.5rem",
//               fontSize: "1rem",
//               borderRadius: "5px",
//             }}
//           />
//         </div>

//         <div style={{ backgroundColor: "#f3e5f5", padding: "1rem", borderRadius: "8px" }}>
//           <h3>Interview Questions</h3>
//           <textarea
//             rows={2}
//             placeholder="How many interview questions do you want?"
//             value={interview}
//             onChange={(e) => setInterview(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "0.5rem",
//               fontSize: "1rem",
//               borderRadius: "5px",
//             }}
//           />
//         </div>

//         <div style={{ backgroundColor: "#e8f5e9", padding: "1rem", borderRadius: "8px" }}>
//           <h3>Error Detection Questions</h3>
//           <textarea
//             rows={2}
//             placeholder="How many error detection questions do you want?"
//             value={errorDetection}
//             onChange={(e) => setErrorDetection(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "0.5rem",
//               fontSize: "1rem",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//       </div>

//       {/* Button */}
//       <button
//         onClick={handleSubmit}
//         disabled={loading || (!language && !mcqs && !interview && !errorDetection)}
//         style={{
//           marginTop: "1.5rem",
//           padding: "0.8rem 2rem",
//           fontSize: "1rem",
//           cursor: "pointer",
//           backgroundColor: "#2196f3",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           transition: "0.3s",
//           display: "block",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         {loading ? "Generating..." : "Generate Response"}
//       </button>

//       {/* ✅ Response Rendering */}
//       {response && (
//         <div
//           style={{
//             marginTop: "2rem",
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//           }}
//         >
//           {response.split("=== ").filter(Boolean).map((section, idx) => {
//             const [title, ...content] = section.split("\n");
//             const sectionText = content.join("\n").trim();

//             if (title.includes("MCQs"))
//               return renderSection("MCQs", sectionText, "#fff3e0");
//             if (title.includes("Interview"))
//               return renderSection("Interview Questions", sectionText, "#e0f7fa");
//             if (title.includes("Error"))
//               return renderSection("Error Detection", sectionText, "#e8f5e9");

//             return null;
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



//////////////////Updated Code////////////////////

import React, { useState } from "react";

function App() {
  const [language, setLanguage] = useState("");
  const [mcqs, setMcqs] = useState("");
  const [interview, setInterview] = useState("");
  const [errorDetection, setErrorDetection] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    let promptParts = [];
    if (language.trim()) promptParts.push(`Language:\n${language.trim()}`);
    if (mcqs.trim())
      promptParts.push(
        `MCQs\nGenerate ${mcqs} multiple choice question(s) with options A, B, C, D and provide the correct answers from this topics ${language}. (Format: Q: ..., A: ..., B: ..., C: ..., D: ..., Ans: ...)`
      );
    if (interview.trim())
      promptParts.push(
        `Interview Questions\nProvide ${interview} simple interview question(s) with short answers from this topics ${language}. (Format: Q: ..., Ans: ...)`
      );
    if (errorDetection.trim())
      promptParts.push(
        `Error Detection\nGive ${errorDetection} error detection question(s) with answers from this topics ${language}. (Format: Q: ..., Ans: ...)`
      );

    if (promptParts.length === 0) return;

    const combinedPrompt = promptParts.join("\n\n");

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        // 🔗 use deployed backend instead of localhost
        "https://language-test-app-production-21f7.up.railway.app/api/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: combinedPrompt }),
        }
      );
      const data = await res.json();
      setResponse(data.text);
    } catch (err) {
      console.error(err);
      setResponse("Failed to generate content");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Function to render each section
  const renderSection = (title, content, bgColor) => (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "1.2rem",
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "1rem", color: "#222" }}>{title}</h2>
      {content.split("\n").map((line, i) => {
        if (!line.trim()) return null;

        // MCQ options
        if (/^[A-D]:/i.test(line)) {
          return (
            <p key={i} style={{ margin: "0.2rem 0 0.2rem 1rem", color: "#444" }}>
              {line}
            </p>
          );
        }

        // Answers
        const isAnswer = line.toLowerCase().startsWith("ans");
        return (
          <p
            key={i}
            style={{
              color: isAnswer ? "#666" : "#000",
              fontWeight: isAnswer ? "normal" : "bold",
              margin: "0.4rem 0",
            }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        fontFamily: "Arial, sans-serif",
        padding: "1rem",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>
        Gemini API Multi-Input Test
      </h1>

      {/* Input Fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ backgroundColor: "#e0f7fa", padding: "1rem", borderRadius: "8px" }}>
          <h3>Enter Language</h3>
          <textarea
            rows={2}
            placeholder="Type the language here..."
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ backgroundColor: "#fff3e0", padding: "1rem", borderRadius: "8px" }}>
          <h3>MCQs</h3>
          <textarea
            rows={2}
            placeholder="How many MCQs do you want?"
            value={mcqs}
            onChange={(e) => setMcqs(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ backgroundColor: "#f3e5f5", padding: "1rem", borderRadius: "8px" }}>
          <h3>Interview Questions</h3>
          <textarea
            rows={2}
            placeholder="How many interview questions do you want?"
            value={interview}
            onChange={(e) => setInterview(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ backgroundColor: "#e8f5e9", padding: "1rem", borderRadius: "8px" }}>
          <h3>Error Detection Questions</h3>
          <textarea
            rows={2}
            placeholder="How many error detection questions do you want?"
            value={errorDetection}
            onChange={(e) => setErrorDetection(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading || (!language && !mcqs && !interview && !errorDetection)}
        style={{
          marginTop: "1.5rem",
          padding: "0.8rem 2rem",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          transition: "0.3s",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {loading ? "Generating..." : "Generate Response"}
      </button>

      {/* ✅ Response Rendering */}
      {response && (
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {response.split("=== ").filter(Boolean).map((section, idx) => {
            const [title, ...content] = section.split("\n");
            const sectionText = content.join("\n").trim();

            if (title.includes("MCQs"))
              return renderSection("MCQs", sectionText, "#fff3e0");
            if (title.includes("Interview"))
              return renderSection("Interview Questions", sectionText, "#e0f7fa");
            if (title.includes("Error"))
              return renderSection("Error Detection", sectionText, "#e8f5e9");

            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default App;




