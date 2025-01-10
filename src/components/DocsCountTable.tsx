import React from 'react';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

export function DocsCountTable() {
  const allDocsData = useAllDocsData();
  const defaultDocs = Object.values(allDocsData)[0];
  const docsCollection = defaultDocs.versions[0].docs;
  const totalDocs = docsCollection.length;
  let docsCount = {};

  docsCollection.forEach(doc => {
    const docFolder = doc.id.split("/").at(0);
    docsCount[docFolder] = (docsCount[docFolder] || 0) + 1;
  })
  
  return (
    <div>
      <table className="min-w-full">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className='hover:bg-gray-50 dark:hover:bg-gray-700'>
              <th className="px-6 py-3 font-semibold">
                폴더명
              </th>
              <th className="px-6 py-3 font-semibold">
                문서 수
              </th>
              <th className="px-6 py-3 font-semibold">
                비율
              </th>
            </tr>
          </thead>
          <tbody >
            <tr className="bg-blue-50 font-medium dark:bg-gray-800">
              <td className="px-6 py-2 text-center font-bold whitespace-nowrap">
                총계
              </td>
              <td className="px-6 py-2 text-right whitespace-nowrap">
                {totalDocs}개
              </td>
              <td className="px-6 py-2 text-right whitespace-nowrap">
                100%
              </td>
            </tr>
            {Object.entries(docsCount)
              .map(([folder, count]) => (
                <tr key={folder} className="hover:bg-blue-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-2 text-sm whitespace-nowrap">
                    {folder}
                  </td>
                  <td className="px-6 py-2 text-sm text-right whitespace-nowrap">
                    {count}개
                  </td>
                  <td className="px-6 py-2 text-sm text-right whitespace-nowrap">
                    {((count / totalDocs) * 100).toFixed(1)}%
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}