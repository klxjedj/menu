const questListText = [
    ['Q1', '1、您一周在外就餐（包括堂食或外卖）的频率（单选题）：', ['几乎没有','1-3次','4-6次','7-9次','7-9次']],
    ['Q2', '2、您平时注重您的食物营养搭配和健康的饮食方式么？ ', ['很注重','有时注重','无所谓','没有特别注意过','完全没有注意过']],
    ['Q3', '3、在试验前，您是否知道自己每日需要摄入多少卡路里？', ['是','否']],
    ['Q4', '4、您在平常选择食物时，会看食品包装上/菜品的营养标签么？', ['经常会看','偶尔会看','很少会看','从来不看']],
    ['Q5', '5、这些营养标签信息对您的帮助大么？', ['非常有用','有时有用，但有时看不懂','不太有用，经常看不懂','完全无用，看不懂']],
    ['Q6', '6、您对本电子点餐界面的满意程度为多少 [单选题]', ['非常不满意','不满意','不太满意','无所谓 ','有点满意','比较满意','非常满意']],
    ['Q7', '7、您对所选食物的满意程度为多少 [单选题', ['非常不满意','不满意','不太满意','无所谓 ','有点满意','比较满意','非常满意']],
    ['Q8', '8、请评价您刚刚点的菜品的健康程度', ['一点都不健康','比较不健康','不健康','不确定','健康','比较健康','非常健康']],
    ['Q9', '9、您在刚刚点餐过程中，考虑的因素有哪些？', ['个人偏好','口味搭配','营养搭配','卡路里高低','其他']],
    ['Q10', '10、您希望在菜单上看到每道菜品的营养信息么？', ['非常希望','希望','无所谓','不希望','非常不希望']],
    ['Q11', '11、您希望菜单上注明的营养信息有（多选）', ['热量','脂肪含量','蛋白质含量','碳水化合物含量','含盐量','其他']],
    ['Q12', '12、您对推荐您选择健康食物的态度是：', ['非常欢迎，特别希望获得专业的建议','欢迎，会选择接受，也要看推荐方式','无所谓','比较反感,一般不会听取','非常反感，饮食选择是个人自由']],
    ['Q13', '13、您觉得您的健康状况怎么样？', ['非常好 ','很好 ','好','一般','不好','很不好','非常不好']],
    ['Q14', '14、您目前是否在节食', ['是','否']],
    ['Q15', '15、您刚刚在点餐的过程中是否出于健康或体重原因修改了食物摄入量？', ['是','否']],
    ['Q16', '16、我非常注重食物的健康。', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意',]],
    ['Q17', '17、食物的健康对我的食物选择几乎没有影响。', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q18', '18、我总是遵循健康均衡的饮食。', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意',]],
    ['Q19', '19、对我来说, 饮食中脂肪含量低是很重要的。', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意',]],
    ['Q20', '20、对我来说, 重要的是我的日常饮食中含有大量维生素和矿物质。', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意',]],
    ['Q21', '21、我喜欢吃什么就吃什么, 我不担心食物的健康。', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意',]],
    ['Q22', '22、我不回避任何食物, 即使它们可能会增加我的胆固醇。', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意',]],
    ['Q23', '23、我关心自己未来的健康状况，并尝试通过日常饮食行为来管理健康', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q24', '24、我为了促进健康可以保持一种独特的饮食习惯，即使很多年内都不一定见效', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q25', '25、我选择食物只是为了满足当下的需求，未来的问题会迎刃而解', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q26', '26、我的饮食行为通常会受到未来结果的影响', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q27', '27、我的饮食只会受到自己短期内行为的影响，比如几天或几周', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q28', '28、便利性是我选择食物和进行饮食决策时的重要影响', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q29', '29、为了取得未来的成果，我愿意牺牲当下的饮食中得到的幸福和快乐', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q30', '30、我认为应当警惕饮食行为所带来的健康风险，即使这些风险在多年后都不会发生', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q31', '31、相比于能够带来一些当下满足的饮食行为，我更愿意坚持那些能够带来更多未来收益的饮食行为', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q32', '32、我很少在意自己的饮食行为可能带来的健康问题，因为我相信它们在变得严重之前都会得到解决', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q33', '33、我认为现在没有必要杜绝某种事物，因为未来的事情可以在之后得到解决', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q34', '34、我选择食物只是为了满足当下的需求，我有能力解决之后可能出现的问题', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q35', '35、我的每日饮食会带来具体的结果，对我来说这比一些遥远后果的行为更重要', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ['Q36', '36、当我选择食物时，我会考虑它在未来可能对我产生的影响', ['1非常不同意', '2不同意', '3有点不同意', '4无所谓', '5有点同意', '6同意', '7非常同意']],
    ]

export default questListText;