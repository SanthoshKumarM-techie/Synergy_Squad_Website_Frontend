const fs = require('fs');
let content = fs.readFileSync('src/History.jsx', 'utf-8');

for (let i = 1; i <= 4; i++) {
  const arrName = 'ss' + i + 'WeekCards';
  const stateName = 'showSS' + i;
  const setStateName = 'setShowSS' + i;
  
  // The text color should be white because all these sections have dark backgrounds (radial gradients)
  const buttonCode = `
            {${arrName}.length > 2 && (
              <div className='mt-8 text-end'>
                <button
                  type='button'
                  onClick={() => ${setStateName}(!${stateName})}
                  className='group relative inline-block cursor-pointer pb-1 font-semibold text-sm tracking-tighter md:text-md lg:text-lg text-white'
                >
                  {${stateName} ? "View Less" : "View More"}
                  <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100' />
                </button>
              </div>
            )}`;

  const searchRegex = new RegExp('(\\{\\(' + stateName + ' \\? ' + arrName + ' : ' + arrName + '\\.slice\\(0, 2\\)\\)\\.map[\\s\\S]*?\\}\\)\\})\\s*<\\/div>', 'g');
  
  content = content.replace(searchRegex, (match, p1) => {
    return p1 + '\n            </div>' + buttonCode;
  });
}

fs.writeFileSync('src/History.jsx', content);
