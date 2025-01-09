import React, { useState } from 'react';

const BlueColorTable = () => {
  // 복사 성공 메시지를 표시하기 위한 상태
  const [copiedText, setCopiedText] = useState('');
  
  const colors = [
    { name: 'AliceBlue', hex: '#F0F8FF' },
    { name: 'Aqua', hex: '#00FFFF' },
    { name: 'Aquamarine', hex: '#7FFFD4' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'BlueViolet', hex: '#8A2BE2' },
    { name: 'CadetBlue', hex: '#5F9EA0' },
    { name: 'CornflowerBlue', hex: '#6495ED' },
    { name: 'Cyan', hex: '#00FFFF' },
    { name: 'DarkBlue', hex: '#00008B' },
    { name: 'DarkCyan', hex: '#008B8B' },
    { name: 'DarkSlateBlue', hex: '#483D8B' },
    { name: 'DeepSkyBlue', hex: '#00BFFF' },
    { name: 'DodgerBlue', hex: '#1E90FF' },
    { name: 'LightBlue', hex: '#ADD8E6' },
    { name: 'LightCyan', hex: '#E0FFFF' },
    { name: 'LightSkyBlue', hex: '#87CEFA' },
    { name: 'LightSteelBlue', hex: '#B0C4DE' },
    { name: 'MediumAquamarine', hex: '#66CDAA' },
    { name: 'MediumBlue', hex: '#0000CD' },
    { name: 'MediumSlateBlue', hex: '#7B68EE' },
    { name: 'MidnightBlue', hex: '#191970' },
    { name: 'Navy', hex: '#000080' },
    { name: 'PaleTurquoise', hex: '#AFEEEE' },
    { name: 'PowderBlue', hex: '#B0E0E6' },
    { name: 'RoyalBlue', hex: '#4169E1' },
    { name: 'SkyBlue', hex: '#87CEEB' },
    { name: 'SlateBlue', hex: '#6A5ACD' },
    { name: 'SteelBlue', hex: '#4682B4' },
    { name: 'Teal', hex: '#008080' },
    { name: 'Turquoise', hex: '#40E0D0' }
  ];

  // 클립보드에 텍스트를 복사하는 함수
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      // 1초 후에 복사 메시지를 지움
      setTimeout(() => {
        setCopiedText('');
      }, 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border p-3 text-left">색상 이름</th>
            <th className="border p-3 text-left">색상 견본</th>
            <th className="border p-3 text-left">HEX 코드</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color) => (
            <tr key={color.name} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td 
                className="border p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => copyToClipboard(color.name)}
              >
                {color.name}{' '}
                {copiedText === color.name && (  
                    <span className="text-green-600 dark:text-green-400">
                    ✓
                    </span>
                )}
              </td>
              <td className="border p-3">
                <div 
                  style={{
                    backgroundColor: color.hex,
                    width: '100px',
                    height: '30px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                  }}
                />
              </td>
              <td 
                className="border p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => copyToClipboard(color.hex)}
              >
                {color.hex}
                {copiedText === color.hex && (
                    <span className="text-green-600 ml-2 dark:text-green-400">
                    ✓
                    </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlueColorTable;