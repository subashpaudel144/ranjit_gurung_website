if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisCommentLikeListsActions",["PolarisCommentLikeListsActionTypes","PolarisCommentLikeListsState","PolarisPaginationUtils","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";var h="5f0b1f6281e72053cbc07909c8d154ae",i=24,j=1;function a(){return d("PolarisPaginationUtils").generatePaginationActionCreators({pageSize:i,pagesToPreload:j,getState:function(a,b){return a.commentLikeLists.get(b,d("PolarisCommentLikeListsState").EMPTY_LISTS).pagination},queryId:h,queryParams:function(a){return{comment_id:a}},onUpdate:function(a,b,e){b=b&&c("nullthrows")(b.comment).edge_liked_by;return{type:d("PolarisCommentLikeListsActionTypes").COMMENT_LIKE_LISTS_REQUEST_UPDATED,fetch:a,commentId:e,count:b==null?void 0:b.count,users:((b==null?void 0:b.edges)||[]).map(function(a){return a.node}),pageInfo:b==null?void 0:b.page_info}},onError:function(a,b,c){return{type:d("PolarisCommentLikeListsActionTypes").COMMENT_LIKE_LISTS__REQUEST_FAILED,fetch:b,commentId:c}}})}b=a();e=b;f=b.first;a=b.next;g._actionCreators=e;g.requestCommentLikes=f;g.requestNextCommentLikes=a}),98);