import React from 'react';

function ResultBanner({steps, result, answer}) {
    return (
        <div className={`${result == "win" ? "happy" : "sad"} banner`}>
            <p>
              {result == "win" ?
              <>
                <strong>Congratulations!</strong> Got it in
                {' '}
                <strong>{steps} guesses</strong>.
              </> :
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
              }
            </p>
        </div>);
}

export default ResultBanner;
