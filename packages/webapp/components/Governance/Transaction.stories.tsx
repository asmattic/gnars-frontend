/*import { Transaction } from "./Transaction";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Transaction>;

const meta: Meta<typeof Transaction> = {
  component: Transaction
};

export default meta;

export const SendETH: Story = {
  args: {
    data: {
      target: "0x6a024f521f83906671e1a23a8B6c560be7e980F4",
      value: 1000000000000000000n,
      calldata: "0x",
      signature: ""
    }
  }
};

export const ContractCall: Story = {
  args: {
    data: {
      target: "0xf74b146ce44cc162b601dec3be331784db111dc1",
      signature:
        "createEdition(string,string,uint64,uint16,address,address,(uint104,uint32,uint64,uint64,uint64,uint64,bytes32),string,string,string)",
      value: 0n,
      calldata:
        "0x00000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000ffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eae0aede44d2fb6da60953e4d49eb5fc61fc141d000000000000000000000000021edd67d43b365a6401a5ee704aa6f264f3f4e4000000000000000000000000000000000000000000000000006a94d74f43000000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000006468d260000000000000000000000000000000000000000000000000000000006479f5e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000004800000000000000000000000000000000000000000000000000000000000000012313030204e6f756e697368205468696e67730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c4e4f554e49534830303030310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015b54686973206d7573696320766964656f20686967686c696768747320736f6d65206f66207468652067726561746573742070656f706c652c20706c616365732c20616e64207468696e67732074686174204e6f756e73206861732066756e64656420696e207468652070617374207965617220616e6420612068616c662e2046726f6d2063727970746f20696e6672757374727563747572652041676f726120746f20536f6675626920646f6c6c732c2066726f6d203344207072696e7465642066617368696f6e20746f204573706f727473207465616d732c2066726f6d206e616d696e67206120676c61737366726f67207370656369657320746f206372656174696e672074686973206d7573696320766964656f2c207468652062726561647468206f6620616d617a696e67207468696e677320746865204e6f756e7320697320646f696e6720697320696e737069726174696f6e616c2e00000000000000000000000000000000000000000000000000000000000000000000000042697066733a2f2f62616679626569636e33663433707670337432677436726d6f6d336932347276756f7064677a373575706778736b7a666c756e66796d67786b766d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042697066733a2f2f62616679626569626f6364667679666d626937356a6e7a376d65666c76663335686c7569686a6b366a696268347434746e70653371713274647a61000000000000000000000000000000000000000000000000000000000000"
    }
  }
};
*/