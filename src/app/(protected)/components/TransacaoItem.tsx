import { useTransacoes } from "@/context/TransacoesContext";
import { Transacao } from "@/models/Transacao";
import { Text, View, TouchableOpacity } from "react-native";

export default function TransacaoItem({transacao}: any){

  const {deletarTransacao} = useTransacoes()

  function handleDelete(transacao : Transacao){
    deletarTransacao(transacao)

  }

    return (
      <View className="bg-white p-4  ">
        <Text className="text-xs font-semibold text-fiap-green uppercase mb-1">
          mes
        </Text>
        <View className="flex flex-row justify-between mb-2">
          <Text className="capitalize text-gray-800 font-medium">
            {transacao.tipoTransacao}
          </Text>
          <Text className="text-gray-500 text-xs">{transacao.date}</Text>
        </View>
  
    
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-800 font-semibold text-lg">
            R$ {transacao.valor}
          </Text>
  
          <View className="flex flex-row gap-4">
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm font-medium">Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-red-500 text-sm font-medium" onPress={()=> handleDelete(transacao)}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
