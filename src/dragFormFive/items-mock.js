export const basicType = [
    {
        label: '单行文本框',
        type: 'input-text',
        value: '',
        placeholder: '请输入',
        require: false,
        maxLength: 20,
    },
    {
        label: '多行文本框',
        type: 'input-area',
        value: '',
        placeholder: '',
        require: false,
        maxLength: 50000,

    },
    {
        label: '说明文字',
        type: 'input-explain',
        value: '',
        placeholder: '',
        require: false,
        maxLength: 20,

    },
    {
        label: '数字输入框',
        type: 'input-number',
        value: '',
        //可输入的小数位数
        float: '',
        require: false,
    },
    {
        label: '金额输入框',
        type: 'input-money',
        value: '',
        float: '',
        //单位
        unit: '',
        require: false,
    },
    {
        label: '图片上传',
        type: 'upload-image',
        value: '',
        require: false,
    },
    {
        label: '文件上传',
        type: 'upload-file',
        value: '',
        require: false,
    },
    {
        label: '紧急程度',
        type: 'urgent-level',
        value: '',
        require: true,
    },
]
export const optionType = [
    {
        label: '单选框',
        type: 'input-radio',
        value: '',
        opitons: [
            {
                label: '单选框选项一',
            },
            {
                label: '单选框选项二',
            }
        ],
        require: false,
    },
    {
        label: '多选框',
        type: 'input-checkbox',
        value: '',
        require: false,
        opitons: [
            {
                label: '单选框选项一',
                value: 'one'
            },
            {
                label: '单选框选项二',
                value: 'tow'
            }
        ],
    },
    {
        label: '人员选择',
        type: 'person-picker',
        value: '',
        require: false,
    },
    {
        label: '部门选择',
        type: 'deparment-picker',
        value: '',
        require: false,
    },
]
export const dateType = [
    {
        label: '日期选择',
        type: 'dete-picker',
        value: '',
        require: false,
    },
    {
        label: '日期区间',
        type: 'date-range',
        value: '',
        require: false,
    },
]
export const seniorType = [
    {
        label: '地理位置',
        type: 'location',
        value: '',
        require: false,
    }
]
export const detailType = [
    {
        label: '明细表格',
        type: 'detail-form',
        value: '',
        require: false,
        detail:[]
    }
]