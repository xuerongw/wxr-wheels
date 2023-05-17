import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
 
export const ExportDataDocx = (tempDocxPath, data, fileName) => {
  console.log(tempDocxPath, data, fileName, 111);
  var expressions = require('angular-expressions');

  expressions.filters.lower = function (input) {
    if (!input) return input;
    // toLowerCase() 方法用于把字符串转换为小写。
    return input.toLowerCase();
  };

  JSZipUtils.getBinaryContent(tempDocxPath, (error, content) => {
    if (error) {
      console.log(error);
    }
 
    // 创建一个JSZip实例，内容为模板的内容
    // let zip = new JSZip(content); //用PizZip替代
    const zip = new PizZip(content);
    // 创建并加载 Docxtemplater 实例对象
    const doc = new Docxtemplater();
    doc.loadZip(zip);
    // 设置模板变量的值
    doc.setData(data);
    try {
      // 呈现文档，会将内部所有变量替换成值，
      doc.render();
    } catch (error) {
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties
 
      };
      console.log({ error: e });
      // 当使用json记录时，此处抛出错误信息
      throw error;
    }
    // 生成一个代表Docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    // 将目标文件对象保存为目标类型的文件，并命名
    saveAs(out, fileName);
  });
};
