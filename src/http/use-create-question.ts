import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] });
    },
  });
}
