"use client";

import { action } from "@/actions";
import { useState } from "react";

function page() {
  const [personCount, setPersonCount] = useState(1);
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && (
        <>
          <h2>Step 1</h2>
          count: {personCount}
          <input
            type="number"
            onChange={(e) => setPersonCount(e.target.value)}
          />
          <button onClick={() => setStep(2)}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Step 2, count: {personCount}</h2>
          <form action={action}>input fields</form>
          <button onClick={() => setStep((prev) => prev - 1)}>Back</button>
        </>
      )}
    </div>
  );
}

export default page;
