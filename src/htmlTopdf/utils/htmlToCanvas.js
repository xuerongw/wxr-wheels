// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
// import JsPDF from 'jspdf'
export function getPdfDouble(element) {
  return html2Canvas(element, {
    allowTaint: true,
  }).then(function (canvas) {
    return canvas
  })
}
