import { fromJS, Map } from 'immutable'
import { GET_TITLE, GET_COMMENTS, GET_CONTENT, SET_UNFOLD } from '../store/actionType'
import { Author } from '../style';
const defaultState = fromJS({
    id: 1,
    title: "趣头条怎么发文章赚钱，一天能赚多少钱",
    content: "趣头条一天能赚多少钱？趣头条收入排行榜上的收入是不是真的？不知道你有没有想过类似这样的问题。看到别人都可以实现周收入一万多，是不是骗人的啊？总之，在开始看新闻以前，把一天能赚多少的问题给搞清楚，没毛病！",
    enjoy: 29,
    onlyAuthor: "false",
    orderByTime: "true",
    closeComment: "false",
    comments: [{
        id: 1,
        critic: "chen1",
        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
        dateline: "2019-01-23",
        report: false,
        remark: "又是一个标题党，说怎么发文章，最后都变成了注册阅读，😌",
        praise: 1,
        unfold: true,
        reply: [
            {
                id: 6,
                critic: "chen沟通",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                remark: "ok",
                praise: 1,
                reply: [{
                    id: 7,
                    critic: "chen",
                    img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                    dateline: "2019-01-23",
                    report: false,
                    remark: "ok",
                    praise: 1,
                    reply: []
                }]
            },
            {
                id: 7,
                critic: "chen儿童椅",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                remark: "ok",
                praise: 1,
                reply: []
            }
        ]

    },
    {
        id: 2,
        critic: "chen2",
        remark: "ok",
        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
        dateline: "2019-01-23",
        report: false,
        praise: 2,
        unfold: true,
        reply: [
            {
                id: 6,
                critic: "chen沟通",
                remark: "又是一个标题党，说怎么发文章，最后都变成了注册阅读，😌4532",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                praise: 1,
                reply: [{
                    id: 7,
                    critic: "chen",
                    remark: "ok",
                    img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                    dateline: "2019-01-23",
                    report: false,
                    praise: 1,
                    reply: []
                }]
            },
            {
                id: 7,
                critic: "chen儿童椅",
                remark: "ok",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                praise: 1,
                reply: []
            }
        ]


    },
    {
        id: 3,
        critic: "chen",
        remark: "又是一个标题党，说怎么发文章，最后都变成了注册阅读，😌43人",
        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
        dateline: "2019-01-23",
        report: false,
        praise: 4,
        unfold: true,
        reply: [
            {
                id: 6,
                critic: "chen沟通",
                remark: "又是一个标题党，说怎么发文章，最后都变成了注册阅读，😌3654回复",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                praise: 1,
                reply: [{
                    id: 7,
                    critic: "chen",
                    remark: "ok",
                    img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                    dateline: "2019-01-23",
                    report: false,
                    praise: 1,
                    reply: []
                }]
            },
            {
                id: 7,
                critic: "chen儿童椅",
                remark: "ok",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                praise: 1,
                reply: [
                    {
                        id: 6,
                        critic: "chen沟通",
                        remark: "ok",
                        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                        dateline: "2019-01-23",
                        report: false,
                        praise: 1,
                        reply: [
                            {
                                id: 7,
                                critic: "chen如图",
                                remark: "ok",
                                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                                dateline: "2019-01-23",
                                report: false,
                                praise: 1,
                                reply: []
                            }]
                    },
                    {
                        id: 7,
                        critic: "chen儿童椅",
                        remark: "ok",
                        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                        dateline: "2019-01-23",
                        report: false,
                        praise: 1,
                        reply: []
                    }
                ]
            }
        ]



    },
    {
        id: 4,
        critic: "chen",
        remark: "ok",
        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
        dateline: "2019-01-23",
        report: false,
        praise: 6,
        unfold: true,
        reply: [{
            id: 6,
            critic: "chen沟通",
            remark: "ok",
            img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
            dateline: "2019-01-23",
            report: false,
            praise: 1,
            reply: [
                {
                    id: 7,
                    critic: "chen如图",
                    remark: "ok",
                    img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                    dateline: "2019-01-23",
                    report: false,
                    praise: 1,
                    reply: []
                }]
        },
        {
            id: 7,
            critic: "chen儿童椅",
            remark: "ok",
            img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
            dateline: "2019-01-23",
            report: false,
            praise: 1,
            reply: []
        }]

    },
    {
        id: 5,
        critic: "chen",
        remark: "ok",
        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
        dateline: "2019-01-23",
        report: false,
        praise: 7,
        unfold: true,
        reply: [
            {
                id: 6,
                critic: "chen沟通",
                remark: "ok",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                praise: 1,
                reply: [
                    {
                        id: 7,
                        critic: "chen如图",
                        remark: "ok",
                        img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                        dateline: "2019-01-23",
                        report: false,
                        praise: 1,
                        reply: []
                    }]
            },
            {
                id: 7,
                critic: "chen儿童椅",
                remark: "ok",
                img: "//upload.jianshu.io/users/upload_avatars/13704752/b0b376fa-fdbf-4813-85f7-f02638028f53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
                dateline: "2019-01-23",
                report: false,
                praise: 1,
                reply: []
            }
        ]


    }
    ]
}
)

export default (state = defaultState, action) => {

    switch (action.type) {
        case GET_TITLE:
            return state;
        case GET_COMMENTS:
            return state;
        case SET_UNFOLD:
            return state.setIn(['comments', action.index,'unfold'], action.unfold)
        default:
            return state;
    }


}