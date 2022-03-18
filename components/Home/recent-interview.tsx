import { Box, Container, List, Stack, Link as MuiLink, Typography } from '@mui/material';
import { FaqCard } from './faq-card';
import Link from 'next/link';

const data = [
  {
    _id: '612b10d874142e4db22c5b15',
    clapsCount: 0,
    question: 'Trong redux toolkit slice, lúc có, lúc ko có return, tại sao lại như vậy?',
    categoryId: '6129f9a4b29b0368a4197ea3',
    answer:
      'Redux Toolkit reducers có sử dụng thư viện https://immerjs.github.io/immer/ bên dưới để giúp mình mutate reference state mà ko cần phải clone.\n\n- Nếu state của mình là primitive --> em buộc phải return về state mới (number, string, boolean)\n- Nếu state của em là dạng object, array (tham chiếu) thì em có thể tiếp cận 2 cách: có hoặc ko có return\n\nNếu ko có return, nó sẽ sử dụng immer để tự clone tham chiếu cho em, em chỉ việc thay đổi trực tiếp trên state là đc.\nNếu có return, thì em phải tự xử lý vụ clone tham chiếu cho đúng đắn, nếu sai thì hậu quả tự chịu hehe\nKhuyến khích dùng kiểu ko có return, để sử dụng thư viện immer.',
    staffId: '6129ede207542376e576db3e',
    createdAt: '2021-08-29T04:45:12.447Z',
    updatedAt: '2021-08-29T06:08:52.738Z',
    __v: 0,
  },
  {
    _id: '612b1aeb9dab4b601f971a36',
    clapsCount: 0,
    question: 'Khi nào nên dùng async action??',
    categoryId: '6129f9a4b29b0368a4197ea3',
    answer:
      'Trước tiên mình cần hiểu xem cái **action** nó giúp mình làm việc gì?\n- Thực hiện được việc gọi API trong action\n- Dispatch được các action khác trong action của mình để có thể tác động lên redux state\n- Tạo ra các complex action để tái sử dụng ở những nơi cần thiết\n\nNhư vậy những trường hợp thích hợp sử dụng **async action**\n- Complex action: khi dispatch action này nó sẽ handle một số logic và dispatch các action khác tuỳ điều kiện.\n- Action mà cần phải gọi APIs\nVà một điều cần lưu ý, các action này sẽ có tác động tới redux state.\n\nTrong dự án, anh luôn ưu tiên:\n- Local state / Component state\n- Sau đó, những cái nào cần shared cho nhiều component, thì anh mới đụng tới redux\n\nViệc handle thêm xoá sửa nên làm trên component, ko cần thông qua **redux** nhé\n- Gọi API trên component đơn giản\n- Handle loading / error dễ dàng \n- Không có tác động tới dữ liệu trên redux, hoặc nếu có thì chỉ là cần fetch lại dữ liệu list sản phẩm. Mình hoàn toàn có thể dispatch một action để fetch lại cái list sau khi hoàn thành tác vụ thêm xoá sửa trên component.\n\nCòn trường hợp **login / logout** đi, cái này nên đi lên **redux**, lý do\n- Cần gọi API để đăng nhập \n- Sau khi đăng nhập, cập nhật lại state loggedInUser trên redux\n--> Cần tạo action, vì có thể gọi login/logout nhiều chỗ. Nếu ko có action thì logic sẽ bị viết lại ở nhiều nơi.',
    staffId: '6129ede207542376e576db3e',
    createdAt: '2021-08-29T05:28:11.065Z',
    updatedAt: '2021-08-29T05:40:14.413Z',
    __v: 0,
  },
  {
    _id: '612ce2fc9dab4b601f971a39',
    clapsCount: 0,
    question: 'Một số link hữu ích cho việc học Regular Expression',
    categoryId: '6129f9a4b29b0368a4197ea5',
    answer:
      '- Lean Regex: https://github.com/ziishaned/learn-regex\n- Interactive learning: https://regexone.com/\n- Playground: https://regex101.com/',
    staffId: '6129ede207542376e576db3e',
    createdAt: '2021-08-30T13:54:04.634Z',
    updatedAt: '2021-08-30T13:54:04.634Z',
    __v: 0,
  },
  {
    _id: '612ce3129dab4b601f971a3a',
    clapsCount: 0,
    question: 'Một số link hữu ích cho việc học TypeScript',
    categoryId: '612b19969dab4b601f971a35',
    answer:
      '- React Typescript Cheat Sheet: https://react-typescript-cheatsheet.netlify.app/docs/basic/setup\n- Typescript Deep Dive: https://basarat.gitbook.io/typescript/\n- Typescript Lang: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
    staffId: '6129ede207542376e576db3e',
    createdAt: '2021-08-30T13:54:26.772Z',
    updatedAt: '2021-08-30T13:54:26.772Z',
    __v: 0,
  },
  {
    _id: '612ce3919dab4b601f971a3b',
    clapsCount: 0,
    question: 'Khi nào dùng const và let?',
    categoryId: '6129f9a4b29b0368a4197ea5',
    answer:
      '1. **const** và **let**: luôn ưu tiên dùng const\n2. Dùng **const** khi nào? --> cho hằng số và cho những biến bạn ko có nhu cầu thay đổi giá trị của nó sau khi gán giá trị lần đầu\n3. Dùng **let** khi nào? --> ngược lại khi bạn dùng let, tức bạn đang chỉ định rằng biến này có khả năng thay đổi đó nha.\n4. Khi dùng **const** thì sẽ ko thực hiện được phép gán (assignment) sau khi khởi tạo (ko quan tâm nó là kiểu dữ liệu gì)\n\nTại sao lại phải ưu tiên dùng **const** thay vì **let**?\n- Thử nghĩ xem: quản lý biến có khả năng thay đổi và biến ko bao giờ thay đổi? Cái nào dễ quản lý hơn?\n- Khi bạn dùng let bạn không chắc được là dữ liệu tại thời điểm bạn dùng nó có giá trị là gì? Vì nó có khả năng thay đổi mà.\n- Nhưng với const thì hoàn toàn yên tâm, chắc chắn ko thể nào có sự thay đổi được, gán lúc đầu là gì, thì nó luôn là cái đó hehe\n\nNói xa hơn tại sao ReactJS, anh luôn nói mọi người ưu tiên **UI component** thay vì **Stateful component** (Container)?\n- UI components: chỉ nhận props và render, ko ảnh hưởng tới dữ liệu của app\n- Containers: nó sẽ tác động tới những logic của app, nên hạn chế dùng. Càng ít containers thì càng ít nơi em cần quản lý tới logic của app.',
    staffId: '6129ede207542376e576db3e',
    createdAt: '2021-08-30T13:56:33.255Z',
    updatedAt: '2021-08-30T13:56:33.255Z',
    __v: 0,
  },
  {
    _id: '612ce3f39dab4b601f971a3c',
    clapsCount: 0,
    question: 'Cách đặt tên biến trong javascript',
    categoryId: '6129f9a4b29b0368a4197ea5',
    answer:
      '- Đặt tên cho **single item**: dùng danh từ số ít (product, student, count, studentCount, comment, category, ...)\n\n- Đặt tên cho **boolean**: dùng prefix has, is, include, contain, ... (isActive, selected, includeSpam, containSpam, hasEvenNumber, ....)\n\n- Đặt tên cho **list of items**: dùng danh từ số ít + suffix List (productList, studentList, commentList, categoryList, ...)\n\n- Đặt tên cho **function**: dùng động từ (convertObjectToArray, addNewItem, findById, ...)',
    staffId: '6129ede207542376e576db3e',
    createdAt: '2021-08-30T13:58:11.644Z',
    updatedAt: '2021-08-30T13:58:11.644Z',
    __v: 0,
  },
  {
    _id: '612ce43a9dab4b601f971a3d',
    clapsCount: 0,
    question: 'Cách đặt tên Component trong Reactjs',
    categoryId: '6129f9a4b29b0368a4197ea3',
    answer:
      '- Dùng** danh từ**.\n\n- Nếu là số nhiều thì dùng **suffix List**. \nVí dụ: ProductList, CommentList, CategoryList, OrderList, ... \nLưu ý ProductList chứ ko phải ProductsList hen.\n\n- Nếu là **item** của một **list** thì có thể: ko dùng suffix, dùng suffix Item, Card, ...\nVí dụ: Product, ProductItem, ProductCard, ...\n\n- Tên component viết theo kiểu **PascalCase**. \nVí dụ: ProductList chứ ko phải product-list hay productList, ...\n\nMọi người để ý mấy cái này để đặt tên component cho nó thống nhất và dễ quản lý nhen',
    staffId: '6129ede207542376e576db3e',
    createdAt: '2021-08-30T13:59:22.543Z',
    updatedAt: '2021-08-30T13:59:22.543Z',
    __v: 0,
  },
  {
    _id: '612d80df9dab4b601f971a3e',
    clapsCount: 0,
    question: 'Cách truyền dữ liệu giữa các components?',
    categoryId: '6129f9a4b29b0368a4197ea3',
    answer:
      '✅ Truyền từ cha xuống con --> dùng `Props`, đặc điểm là component con ko thể thay đổi giá trị của props nhận từ component cha \n\n✅ Dữ liệu chỉ sử dụng cho một component hiện tại --> dùng component `state` (useState hook) \n\n✅ Dữ liệu giữa 2 components ngang hàng --> có thể `đẩy state lên cho component cha chung` giữ state.\n\nVí dụ: \n\n```\nPage: giữ dữ liệu của các component con cần trao đổi\n|__ FilterForm: mỗi khi thay đổi, báo lên Page\n|__ ProductList: Page cho dữ liệu gì, render dữ liệu đó\n|__ Pagination: mỗi khi thay đổi, báo lên Page\n```\n\nGiao diện này giúp mình lọc danh sách sản phẩm theo filters và pagination. \nVậy ở đây làm sao ProductList biết FilterForm đang chọn cái gì mà show dữ liệu tương ứng? \n--> Đẩy state lên component cha `Page` giữ.\n\nPage sẽ có state sau:\n- `filters`: chứa dữ liệu của FilterForm + Pagination\n- `productList`: chứa dữ liệu danh sách sản phẩm\nPage sẽ truyền state này xuống cho các component con.\n\nMỗi khi FilterForm thay đổi hoặc Pagination thay đổi --> báo lên Page để cập nhật state `filters`\nKhi filters thay đổi --> fetch lại danh sách products rồi cập nhật vào state `productList`\n\n\n✅ Dữ liệu giữa nhiều components khác nhau, hoặc ở khắp nơi, hoặc nested nhiều tầng, ... --> xem xét dùng `Redux`.',
    staffId: '6129ede207542376e576db3c',
    createdAt: '2021-08-31T01:07:43.168Z',
    updatedAt: '2021-08-31T01:08:53.965Z',
    __v: 0,
  },
  {
    _id: '612d81869dab4b601f971a40',
    clapsCount: 0,
    question: 'Designer ko gắn link lên design để biết click button này sẽ dẫn tới đâu?',
    categoryId: '612d81699dab4b601f971a3f',
    answer:
      '1. Designer thường không phải là người cung cấp URL, mà là marketing hoặc PMs.\n\n2. Nếu được, frontend hãy suggest cho họ URLs hợp lý. Lúc xem design, requirements là mình đã hiểu ideas rồi, hãy suggest cho họ URLs nhé.\n\n3. Documentation của hầu hết các project là tệ, thẩm chí là ko có, nên em đừng bất ngờ vì vụ này, tại có ai đầu tư cho làm document đâu, dí tasks miết :rofl:  Thường các project lớn lớn thì may ra mới có documents, mà cái này do BA/PM viết =)))\n\n4. Về cái flow, click nút nào sẽ dẫn đi đâu thì hãy suggest designer làm thêm chỗ này, vẽ mũi tên đỏ từ cái button qua cái màn hình kia là xong (đơn giản).\n\n5. Trước khi start project / feature, hãy nói PM/BA/Designer/QA tham gia để nhờ họ trình bày cái flow một lần để mn cùng hiểu.\n\n6. Trong quá trình làm nếu có gì lạ, phát hiện ko code đc, hoặc làm hơi khác so với design thì đi confirm liền với designer để thoả thuận.\n\n7. Sau khi làm xong UI, thì capture lại màn hình để xác nhận vs designer\n\n8. Sau khi làm xong flow, thì record videos ngắn để confirm với PM/BA',
    staffId: '6129ede207542376e576db3c',
    createdAt: '2021-08-31T01:10:30.146Z',
    updatedAt: '2021-08-31T01:12:27.399Z',
    __v: 0,
  },
  {
    _id: '61436c029dab4b601f971a41',
    clapsCount: 0,
    question: 'Tiếng Anh cho developer',
    categoryId: '612d81699dab4b601f971a3f',
    answer:
      'Về Tiếng Anh thì developer phải có được\n\n- Master đọc\n- Giỏi giao tiếp (nghe + nói)\n- Tạm tạm phần viết\n\n---\n\n**Để master đọc**, em phải chịu khó tra từ thôi em.\nNhiều từ chuyên ngành thì ko dịch đc, mình dùng từ gốc em nha.\nChịu khó đọc blog tiếng anh hằng ngày\nThời gian đầu phải tra và học từ vựng, 1 ngày 1 bài blog cũng đc nhưng em đọc và hiểu được nó.\n\nRồi nâng dần level lên, cứ thế theo thời gian em sẽ đọc hiểu nhiều tài liệu à.\nTới khi nào em đc tới level, đọc lướt mà vẫn nắm đc nội dung chính của blog là ngon. :stuck_out_tongue_winking_eye: (skimming)\n\nRồi phần nào cần kĩ thì đọc kĩ lại và ngâm cứu sâu hơn (scanning)\n\n---\n\n**Về giao tiếp**, em phải đi học, tìm bạn giao tiếp, tìm môi trường giao tiếp, nói chung phải nói chuyện =)))\nCòn làm bằng cách nào thì tuỳ em nha hehe\nLuyện tập thuyết trình bằng tiếng Anh.\nLuyện tập diễn tả suy nghĩ của mình bằng tiếng Anh, tránh mình muốn nói thế này mà ko biết diễn tả ra sao.\n\n---\n\n**Viết** thì học ngữ pháp bình thường là đc òi, chia thì cho đúng.\nCâu cú viết đúng ngữ pháp, ko giỏi thì viết câu ngắn, đừng viết câu dài.\nLuyện tập viết email trình bày vấn đề.\n\n---\n\n**Mỗi người một cách học**, em tự tìm cách học cho riêng mình nha :slight_smile: \nChúc bạn thành công! :heart:',
    staffId: '6129ede207542376e576db3c',
    createdAt: '2021-09-16T16:08:34.162Z',
    updatedAt: '2021-09-16T16:08:34.162Z',
    __v: 0,
  },
];

export const RecentInterview = () => {
  return (
    <Box pt={4} pb={4}>
      <Container>
        <Stack direction="row" justifyContent={{ xs: 'center', md: 'space-between' }} mb={2}>
          <Typography variant="h6">Recent Interview</Typography>
          <Link href="/faq" passHref>
            <MuiLink display={{ xs: 'none', md: 'inline' }} color="secondary.light">
              View all
            </MuiLink>
          </Link>
        </Stack>
        <List sx={{ width: '100%' }} component="nav" aria-labelledby="nested-list-subheader">
          <Stack
            sx={{
              '& > div': {
                width: '100%',
              },
            }}
          >
            {data.map((faq, index) => (
              <Box>
                <FaqCard faq={faq} key={index} />
              </Box>
            ))}
          </Stack>
        </List>
      </Container>
    </Box>
  );
};
