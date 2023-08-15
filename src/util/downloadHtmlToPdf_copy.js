
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    install(Vue, options) {
        Vue.prototype.downloadHtmlToPdf_copy = function (sDate,eDate) {
            
            var title = sDate+'-'+eDate+'历史数据分析报告'
            html2Canvas(document.querySelector('#HistoryDataPrinter'), {    // 这个id很重要，一旦填写错了或者不填写就会报错
                allowTaint: true,
                useCORS: true
            }).then(function (canvas) {
                let contentWidth = canvas.width
                let contentHeight = canvas.height
                let pageHeight = contentWidth / 592.28 * 841.89
                let leftHeight = contentHeight
                let position = 0
                let imgWidth = 841.89
                let imgHeight = 841.89 / contentWidth * contentHeight
                let pageData = canvas.toDataURL('image/jpeg', 1.0)
                let PDF = new JsPDF('l', 'pt', 'a4',false)
                if (leftHeight < pageHeight) {
                    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                    // PDF.addImage(pageData, 'JPEG', 20, position+20, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                        leftHeight -= pageHeight
                        position -= 841.89
                        if (leftHeight > 0) {
                            PDF.addPage()
                        }
                    }
                }
                PDF.save(title + '.pdf')
            }
            )
        }
    }
}

