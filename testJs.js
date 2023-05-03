        $("#question").hide();
        $("#result").hide();

        var num =1;
        console.log(num)
        var q = {
            1: {"title": "첫 번째 질문", "type": "EI", "E": "E", "I": "I"},
            2: {"title": "두 번째 질문", "type": "SN", "S": "S", "N": "N"}, 
            3: {"title": "세 번째 질문", "type": "FT", "F": 'F', "T": "T"}, 
        }
        var result = {
            "ESF":{"mbti":"esf"},
            "EST":{"mbti":"est"},
            "ENF":{"mbti":"enf"},
            "ENT":{"mbti":"est"},
            "ISF":{"mbti":"isf"},
            "IST":{"mbti":"ist"},
            "INF":{"mbti":"inf"},
            "INT":{"mbti":"ist"},
        }

        function start() {
            $("#start").hide();
            $("#question").show();
            next();
        }

        $("#A").click(function(){
            var type=$("#type").val();
            var preValue =$("#"+type).val();
            $("#"+type).val(parseInt(preValue)+1);
            console.log($("#"+type).val(parseInt(preValue)+1));
            next();
        });
        $("#B").click(function(){
            next();
        });

        function next(){
            if(num==4){
                $("#question").hide();
                $("#result").show();
                var str="";
                ($("#EI").val()<1) ? str+="I" : str+="E";
                ($("#SN").val()<1) ? str+="N" : str+="S";
                ($("#FT").val()<1) ? str+="T" : str+="F";
                $("#mbti").html(result[str]["mbti"]);
            }
            else{
                $(".progress-bar").attr('style',' width: calc(100/3*'+num+'%)');
                $("#pgrNum").html(num+'/3');
                $("#title").html(q[num]["title"]);
                $("#type").val(q[num]["type"]);
                $("#A").html(q[num]["A"]);
                $("#B").html(q[num]["B"]);
                num++;
            }
        }

        // 링크 복사하는 함수
        function copy(){
            var url = '';
            var textarea = document.createElement("textarea");
            document.body.appendChild(textarea);
            url = window.document.location.href;
            textarea.value = url;
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("링크가 복사되었습니다.")
        }